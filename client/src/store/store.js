import Vuex from 'vuex';
import Vue from 'vue';

import {router} from '../main'
import * as GlobalTypes from './globalTypes'

import CarteModule from './carte/carteModule'
import TerritoireModule from './carte/territoireModule'
import DatasetModule from './dataset/datasetModule'
import CreateDatasetFormModule from './dataset/createDatasetFormModule'
import ImportVariableModule from './variable/importVariableModule'
import InfoControlModule from './carte/infoControlModule'
Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules:{
        CarteModule,
        TerritoireModule,
        DatasetModule,
        CreateDatasetFormModule,
        ImportVariableModule,
        InfoControlModule
    },
    state:{
        isLoading:false,
    },
    getters:{
        [GlobalTypes.IS_LOADING]:state => state.isLoading,
    },
    actions:{
        [GlobalTypes.NAVIGATE]:(context,params) => {
            router.push(params);
        },
        [GlobalTypes.SET_LOADING]:(context,loading) =>{
            context.commit(GlobalTypes.SET_LOADING, loading);
        }
    },
    mutations:{
        [GlobalTypes.SET_LOADING]:(state,loading) =>{
            state.isLoading = loading;
        }
    }
})