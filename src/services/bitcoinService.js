import axios from "axios"
import { storageService } from "./async.storage.service"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize
}

const PRICE_HISTORY_KEY = 'PriceHistory_DB'
const AVG_BLOCK_SIZE_KEY = 'AvgBlockSize_DB'

async function getRate(userBalance = 1) {
    const { data } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${userBalance}`)
    console.log(data)

    return data
}

async function getMarketPriceHistory() {
    let priceHistory = []
    try {
        let priceHistory = await storageService.query(PRICE_HISTORY_KEY)

        if (priceHistory && priceHistory.length) {
            console.log('PriceHistory from storage')
            return priceHistory
        }

        priceHistory = await (axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'))



        const { values } = priceHistory.data
        console.log("🚀 ~ getMarketPriceHistory ~ values:", values)

        // priceHistory = priceHistory.map(val => {
        //     return {
        //         date: new Date(val.x * 1000).toLocaleDateString("en-US"),
        //         price: val.y
        //     }
        // })

        storageService.post(PRICE_HISTORY_KEY, values)
        console.log("🚀 ~typeof getMarketPriceHistory ~ priceHistory:", typeof (values))
        return values

    } catch (err) {
        console.log(err)
    }
}

async function getAvgBlockSize() {
    var avgBlockSize = [],
        avgBlockSize = await storageService.query(AVG_BLOCK_SIZE_KEY)

    if (avgBlockSize && avgBlockSize.length) {
        console.log('avgBlockSize from storage')
        return avgBlockSize
    }

    const { data } = axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')

    const { values } = data
    console.log(values)
    storageService.post(AVG_BLOCK_SIZE_KEY, values)

    return values
}

/*
Exchange rates
https://blockchain.info
Market price History
https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true
Average block size
https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true
More to explore
https://www.blockchain.com/charts */