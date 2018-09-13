import { list } from "../../node_modules/postcss";
import {Indicator} from "mint-ui"

let state={
    num:0,
    data:[],
    heads:[],
    makList:[],
    getDetail:{},
    list:[],
    SerialID:2593,
    isSelect:false,
    curType:"全部"
}

let getters={
    year(state){
        if(!state.getDetail.list){
            return []
        }
        let arr=state.getDetail.list.map(item=>{
            return item.market_attribute.year;
        })

        let set = new Set(arr);
        return ['全部',...set];
    },
    list(state){
        if(!state.getDetail.list){
            return []
        }
        function marge(arr){
            let types=[];
            let obj={};
            arr.forEach(item=>{
                let type=item.exhaust_str+'/'+item.max_power_str+" "+item.inhale_type;
                if(types.indexOf(type)===-1){
                    types.push(type);
                    obj[type]=[item];
                }else{
                    obj[type].push(item);
                }
            })
            return obj;
        }

        if(state.curType=="全部"){
            return marge(state.getDetail.list)
        }else{
            return marge(state.getDetail.list.filter(item=>{
                return state.curType==item.market_attribute.year;
            }))
        }
    }
}

let mutations={
    changeYear(state,payload){
        state.curType=payload
    },
    changeData(state,payload){
        let arr=[];
        let json={
            title:"A",
            list:[]
        }
        payload.data.forEach(item => {
            let title = item.Spelling.slice(0, 1);
            if (json.title !== title) {
                arr.push(json)
                json = {
                    title: '',
                    list: []
                }
                json.title = title;
                json.list.push(item);
            } else {
                json.list.push(item);
            }
            //arr=new Set(arr.push(json))
            
        });
        arr.push(json)
        state.data = arr;
    },
    makList(state,payload){
        state.makList=payload,
        state.isSelect=true
    },
    changeFlag(state){
        state.isSelect=false;
    },
    getDetail(state,payload){
        payload.list.sort((a,b)=>{
            //按照年份排序，降序
            if(b.market_attribute.year!=a.market_attribute.year){
                return b.market_attribute.year-a.market_attribute.year
            }else{
                //按照排量排序，升序
                if(b.exhaust_str>a.exhaust_str){
                    return -1;
                }else if(b.exhaust_str<a.exhaust_str){
                    return 1
                }else{
                    //按照知道价格排序，升序
                    if(b.market_attribute.dealer_price_min>a.market_attribute.dealer_price_min){
                        return -1;
                    }else{
                        return 1;
                    }
                }
            }
        })
        state.SerialID=payload.SerialID;
        state.getDetail=payload;
        state.carID=state.getDetail.list[0].car_id;
    }   
}

let actions={
    fun({commit}){
        Indicator.open();
        fetch("https://baojia.chelun.com/v2-car-getMasterBrandList.html?_1535698551812&tdsourcetag=s_pctim_aiomsg")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            Indicator.close();
            commit("changeData",data);
        })
    },
    makList({commit},payload){
        Indicator.open();
        fetch("https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID="+payload)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            Indicator.close();
            commit("makList",data.data)
        })
    },
    getDetail({commit},payload){
        Indicator.open();
        fetch("https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID="+payload)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            Indicator.close();
            commit("getDetail",data.data)
        })
    }
}

export default {
    state,
    mutations,
    getters,
    actions,
    namespaced:true
}