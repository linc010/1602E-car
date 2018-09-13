import {Indicator} from "mint-ui"
let state={
    imgs:[],
    arr:[],
    price:{}
}
let getters={

}
let mutations={
    getImg(state,paylod){
        paylod.data.forEach(item=>{
            item.List.forEach(mins=>{
                let les=/(\{)([\d])(\})/g;
                mins.Url=mins.Url.replace(les,mins.LowSize);
            })
        })
        state.imgs=paylod.data;
    },
    getColor(state,payload){
        state.arr=payload.data;
    },
    getPrice(state,payload){
        state.price=payload.data;
    }
}
let actions={
    getImgs({commit},payload){
        Indicator.open();
        fetch("https://baojia.chelun.com/v2-car-getImageList.html?SerialID="+2593)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            Indicator.close();
            commit("getImg",data)
        })
    },
    getColor({commit},payload){
        fetch("https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID="+payload)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            commit("getColor",data)
        })
    },
    getPrice({commit},payload){
        let mink='';
        if(payload.cityId){
            mink="carId="+payload.carId+"&cityId="+payload.cityId;
        }
        fetch("https://baojia.chelun.com/v2-dealer-alllist.html?"+mink+"&_1536567071679")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            commit("getPrice",data)
        })
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}