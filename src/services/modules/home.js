import HYRequest from '../request'

export function getHomeGoodPriceData(){
    return HYRequest.get({
        url:'/home/goodprice'
    })
}

export function getHomeHighScoreData(){
    return HYRequest.get({
        url:'/home/highscore'
    })
}

export function getHomeDiscountData(){
    return HYRequest.get({
        url:'/home/discount'
    })
}

export function getHomeHotRecommendData(){
    return HYRequest.get({
        url:'/home/hotrecommenddest'
    })
}