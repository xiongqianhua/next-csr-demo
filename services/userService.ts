import axios from "@/utils/axios";

export interface Robot {
  id: string;
  name: string;
  model: string;
  status: string;
  created_at: string;
  updated_at: string;
  robot_log_id: string;
}

export interface RobotLog {
  id: string;
  name: string;
  robot_id: string;
  robot_name: string;
  robot_model: string;
  robot_status: string;
  robot_created_at: string;
  robot_updated_at: string;
  robot_log_id: string;
  robot_log_name: string;
  robot_log_model: string;
  robot_log_status: string;
  robot_log_created_at: string;
  robot_log_updated_at: string;
  robot_log_content: string;
}

export const getAllRobots = async (params: any): Promise<{ data: Robot[] }> => {
  const response = await axios.get("/api/all_robots", { params });
  return response.data;
};

export const getRobotLog = async (params: any): Promise<{ data: RobotLog[] }> => {
  const response = await axios.get("/api/robots_log", { params });
  return response.data;
};