export default function ReviewCountFormatter(reviewCount) {
    if(reviewCount <=0){
        return "N/A";
    }
    else if(reviewCount >0 && reviewCount<1000){
        return ""+reviewCount;
    }
    else if(reviewCount>=1000 && reviewCount<100000){
        let thousandString = "" + reviewCount / 1000 
        return thousandString.match(/^-?\d+(?:\.\d{0,1})?/)[0] + "k"
    }
    else {
        return "99.9k"
    }
}
