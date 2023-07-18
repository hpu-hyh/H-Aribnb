import HYRequest from '../request'

export function getHomeGoodPriceData(){
    return HYRequest.get({
        url:'/home/goodprice'
    })
}