/**
 * 获取当前环境代码
 * 开发：dev
 * 测试：test
 * 生产：prod
 * @returns 
 */
export const getNodeEnv = () => {
  return process.env.NODE_ENV
}