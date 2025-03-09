import axios from "axios";
import { io } from "socket.io-client";

const API_URL = "http://localhost:8000/api";

export const initiateSocketConnection = async () => {
  const socket = io("http://localhost:8000", {});
  return socket;
};

export const getUser = async (userId) => {
  const res = await axios.get(`${API_URL}/auth/users/${userId}/`);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axios.get(`${API_URL}/auth/users/`);
  return res.data;
};

export const getChatRooms = async () => {
  const res = await axios.get(`${API_URL}/chat/rooms/`);
  return res.data;
};

export const createChatRoom = async (members) => {
  const res = await axios.post(`${API_URL}/chat/rooms/`, { members });
  return res.data;
};

export const getMessagesOfChatRoom = async (chatRoomId) => {
  const res = await axios.get(`${API_URL}/chat/messages/${chatRoomId}/`);
  return res.data;
};

export const sendMessage = async (messageBody) => {
  const res = await axios.post(`${API_URL}/chat/messages/`, messageBody);
  return res.data;
};
