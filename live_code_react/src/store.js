import createStore from "unistore";
import axios from "axios";

// News API
const apiKey = "619529381a494be9af64c6269526d196";
const baseUrl = "https://newsapi.org/v2/";
// const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

const initialState = {
    search : "",
    listDetailBerita:[],
    listBeritaTerkini:[],
    isLoadingBeritaTerkini: true,
    isLoadingDetailBerita: true,
    category:"",
    statusLogin:false,
    inputPage1:"",
    stateToChangeFromPage: "belum berubah",
    name : "",
    email : "",
    api_key : ""
};

export const store = createStore(initialState);

export const actions = store => ({

    handleSearch : (state,e) => {
        console.warn("cek e pada handle input placeholder", e.target.placeholder)
        console.warn("cek value name", e.target.value)
        let value = e.target.value;
        store.setState({ search :value, category:value});
        console.warn("cek store", store.getState())
    },
    
    handleClickKategori : async (state,e) => {
        console.warn("cek e pada handle input change klik kategori", e)
        console.warn("cek value klik kategori", e)
        let value = e;
        await store.setState({ search:value, category:value});
        console.log("cek state input cek", store.getState());
    },
    
    getDetailBerita : () =>{
        axios
            .get(`${baseUrl}everything?q=${store.getState().search}&apiKey=${apiKey}`)
            .then(function(response){
                store.setState({ listDetailBerita: response.data.articles, isLoadingDetailBerita: false});
                console.warn("cek store", store.getState().listDetailBerita)
                // handle success
                // console.log(response.data);
            })
            .catch(function(error){
                store.setState({ isLoadingDetailBerita: false});
                // handle error
                // console.log(error)
            });
    },
    

    goBackHome : () => {
        store.setState({isLoadingBeritaTerkini : true});
    },
      
    getListberitaterkini : () =>{
    
        axios
            .get(`${baseUrl}top-headlines?country=id&category=${store.getState().category}&apiKey=${apiKey}`)
            .then(function(response){
            store.setState({ listBeritaTerkini: response.data.articles, isLoadingBeritaTerkini: false});

            // handle success
            // console.log(response.data);
            })
            .catch(function(error){
            store.setState({ isLoadingBeritaTerkini: false});
            // handle error
            // console.log(error)
            });
        }


})