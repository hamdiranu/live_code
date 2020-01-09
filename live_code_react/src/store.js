import createStore from "unistore";
import axios from "axios";

const initialState = {
    search : "",
    listDetailBerita:[],
    isLoadingDetailBerita: true,
    category:"",
    statusLogin:false,
    inputPage1:"",
    stateToChangeFromPage: "belum berubah",
    name : "",
    email : "",
    avatar : ""
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

    handleClickContentStore: async (state, e)=>{
        console.warn("cek e pada handle input change klik kategori", e)
        console.warn("cek value klik kategori", e)
        let value = e;
        await store.setState({ search:value, category:value});
        console.log("cek state input cek", store.getState());

        axios
            .get("https://api-todofancy.herokuapp.com/api/movies")
            .then(function(response){
                store.setState({ listDetailBerita: response.data.movies, isLoadingDetailBerita: false});
                console.warn("cek list Detail berita", store.getState().listDetailBerita)
                // handle success
                // console.log(response.data);
            })
            .catch(function(error){
                store.setState({ isLoadingDetailBerita: false});
                // handle error
                // console.log(error)
            });
    },
      

})