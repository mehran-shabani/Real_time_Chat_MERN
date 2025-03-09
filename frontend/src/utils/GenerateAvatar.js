import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

const generateAvatar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const avatars = useMemo(() => {
    const avatars = [];
    for (let i = 0; i < 12; i++) {
      const avatar = createAvatar(lorelei, {
        seed: i.toString(),
        size: 128,
      }).toDataUriSync();
      avatars.push(avatar);
    }
    return avatars;
  }, []);

  return avatars;
};

export { generateAvatar };