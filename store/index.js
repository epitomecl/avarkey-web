import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'


const store = () => new Vuex.Store({  
  state,
  mutations: {
  	registerWeb3Instance(state, payload) {
  		console.log('registerWeb3instance Mutation being executed', payload)
  		let result = payload
  		let web3Copy = state.web3
  		web3Copy.coinbase = result.coinbase
  		web3Copy.networkId = result.networkId
  		web3Copy.balance = parseInt(result.balance, 10)
  		web3Copy.isInjected = result.injectedWeb3
  		web3Copy.web3Instance = result.web3
  		state.web3 = web3Copy
      if (process.BROWSER_BUILD) {
        const pollWeb3 = require('../util/pollWeb3')
        pollWeb3()
      }
  	},

  	pollWeb3Instance(state, payload) {
      console.log('pollWeb3Instance mutation being executed', payload)
      state.web3.coinbase = payload.coinbase
      state.web3.balance = parseInt(payload.balance, 10)
    },

    registerContractInstance (state, payload) {
      console.log('register contract instance: ', payload)
      state.contractInstance = () => payload
    }
  },

  actions: {
  	registerWeb3 ({commit}) {
  		console.log('registerWeb3 Action being executed')
      if (process.BROWSER_BUILD) {        
        const getWeb3 = require('../util/getWeb3')
        console.log("tetetet");
    		getWeb3.then(result => {
    			console.log('committing result to registerWeb3Instance mutation')
    			commit('registerWeb3Instance', result)
    		}).catch(e => {
    			console.log('error in action registerWeb3', e)
    		})
      }
  	},

    pollWeb3 ({commit}, payload) {
      console.log('pollWeb3 action being executed')
      commit('pollWeb3Instance', payload)
    },

    getContractInstance({commit}) {
      if (process.BROWSER_BUILD) {
        const getContract = require('../util/getContract')
        getContract.then(result => {
          commit('registerContractInstance', result)
        }).catch(e => console.log(e))
      }
    }
  }
})

export default store