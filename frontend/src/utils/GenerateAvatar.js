import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

function GenerateAvatar() {
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 128,
      // ... other options
    }).toDataUri();
  }, []);

  return <img src={avatar} alt="Avatar" />;
}

export default GenerateAvatar;