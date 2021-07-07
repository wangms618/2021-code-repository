import { get } from './helpers'

const getSeller = get("api/seller") // 获取商家信息
const getGoods = get('api/goods') // 获取商品信息

export {
  getSeller,
  getGoods
}