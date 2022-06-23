
App = {
    web3Provider: null,
    contracts: {
      RpoToken: null
    },
    currentAddress: '',
    contractAddress: '0x656D7f9726B54f17A9cCE605A7626DEA645AD553',
    contractAbi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"buyIntroRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"denominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"founderAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"founderRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getWhitelist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"introBindAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"introRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_burnAddress","type":"address"}],"name":"setBurnAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnRate","type":"uint256"}],"name":"setBurnRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_buyIntroRate","type":"uint256[]"}],"name":"setBuyIntroRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"setDenominator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_founderAddress","type":"address"}],"name":"setFounderAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_founderRate","type":"uint256"}],"name":"setFounderRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_introBindAddress","type":"address"}],"name":"setIntroBindAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketingAddress","type":"address"}],"name":"setMarketingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_marketingRate","type":"uint256"}],"name":"setMarketingRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pairAddress","type":"address"}],"name":"setPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiveAddress","type":"address"}],"name":"setReceiveAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_swapAddress","type":"address"}],"name":"setSwapAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}],
    initWeb3: async function () {
      if (window.ethereum) {
        App.web3Provider = window.ethereum
        web3 = new Web3(App.web3Provider);
        try {
          // await App.changeNetwork()
          await ethereum.enable()
        } catch (error) {
        }
      } else {
        if (window.web3) {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(App.web3Provider);
        } else {
          App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
          web3 = new Web3(App.web3Provider);
        }
      }
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          return
        }
        App.currentAddress = accounts[0]
        return App.initContract();
      });
    },
    initContract: function () {
      App.contracts.RpoToken = new web3.eth.Contract(App.contractAbi, App.contractAddress);
      return App.bindEvents();
    },
    bindEvents: function () {
      $(document).on('change', '#select', App.selectFunction);
    },
    selectFunction: function () {
      let index = $('#select').val()
      let functionAbi = App.contractAbi[index]
      $('#' +functionAbi.name + 'Box').show().siblings().hide()

    },
    addWhitelist:async function (){
            let addWhitelist_account = $('#addWhitelist_account').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.addWhitelist(addWhitelist_account).send({from:App.currentAddress})
          },
          approve:async function (){
            let approve_spender = $('#approve_spender').val()
      let approve_amount = $('#approve_amount').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.approve(approve_spender,approve_amount).send({from:App.currentAddress})
          },
          decreaseAllowance:async function (){
            let decreaseAllowance_spender = $('#decreaseAllowance_spender').val()
      let decreaseAllowance_subtractedValue = $('#decreaseAllowance_subtractedValue').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.decreaseAllowance(decreaseAllowance_spender,decreaseAllowance_subtractedValue).send({from:App.currentAddress})
          },
          delWhitelist:async function (){
            let delWhitelist_account = $('#delWhitelist_account').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.delWhitelist(delWhitelist_account).send({from:App.currentAddress})
          },
          getETH:async function (){
            let getETH__amount = $('#getETH__amount').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.getETH(getETH__amount).send({from:App.currentAddress})
          },
          getToken:async function (){
            let getToken__token = $('#getToken__token').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.getToken(getToken__token).send({from:App.currentAddress})
          },
          increaseAllowance:async function (){
            let increaseAllowance_spender = $('#increaseAllowance_spender').val()
      let increaseAllowance_addedValue = $('#increaseAllowance_addedValue').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.increaseAllowance(increaseAllowance_spender,increaseAllowance_addedValue).send({from:App.currentAddress})
          },
          initialize:async function (){
            
            let dataRpoToken = await App.contracts.RpoToken.methods.initialize().send({from:App.currentAddress})
          },
          renounceOwnership:async function (){
            
            let dataRpoToken = await App.contracts.RpoToken.methods.renounceOwnership().send({from:App.currentAddress})
          },
          setBurnAddress:async function (){
            let setBurnAddress__burnAddress = $('#setBurnAddress__burnAddress').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setBurnAddress(setBurnAddress__burnAddress).send({from:App.currentAddress})
          },
          setBurnRate:async function (){
            let setBurnRate__burnRate = $('#setBurnRate__burnRate').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setBurnRate(setBurnRate__burnRate).send({from:App.currentAddress})
          },
          setBuyIntroRate:async function (){
            let setBuyIntroRate__buyIntroRate = ['50','50','50','50','50','50','50','50','50','50','50','50','50','50','50','50']
            console.log(setBuyIntroRate__buyIntroRate .length)
            let dataRpoToken = await App.contracts.RpoToken.methods.setBuyIntroRate(setBuyIntroRate__buyIntroRate).send({from:App.currentAddress})
          },
          setDenominator:async function (){
            let setDenominator__denominator = $('#setDenominator__denominator').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setDenominator(setDenominator__denominator).send({from:App.currentAddress})
          },
          setFounderAddress:async function (){
            let setFounderAddress__founderAddress = $('#setFounderAddress__founderAddress').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setFounderAddress(setFounderAddress__founderAddress).send({from:App.currentAddress})
          },
          setFounderRate:async function (){
            let setFounderRate__founderRate = $('#setFounderRate__founderRate').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setFounderRate(setFounderRate__founderRate).send({from:App.currentAddress})
          },
          setIntroBindAddress:async function (){
            let setIntroBindAddress__introBindAddress = $('#setIntroBindAddress__introBindAddress').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setIntroBindAddress(setIntroBindAddress__introBindAddress).send({from:App.currentAddress})
          },
          setMarketingAddress:async function (){
            let setMarketingAddress__marketingAddress = $('#setMarketingAddress__marketingAddress').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setMarketingAddress(setMarketingAddress__marketingAddress).send({from:App.currentAddress})
          },
          setMarketingRate:async function (){
            let setMarketingRate__marketingRate = $('#setMarketingRate__marketingRate').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setMarketingRate(setMarketingRate__marketingRate).send({from:App.currentAddress})
          },
          setPairAddress:async function (){
            let setPairAddress__pairAddress = $('#setPairAddress__pairAddress').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setPairAddress(setPairAddress__pairAddress).send({from:App.currentAddress})
          },
          setReceiveAddress:async function (){
            let setReceiveAddress__receiveAddress = $('#setReceiveAddress__receiveAddress').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setReceiveAddress(setReceiveAddress__receiveAddress).send({from:App.currentAddress})
          },
          setSwapAddress:async function (){
            let setSwapAddress__swapAddress = $('#setSwapAddress__swapAddress').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.setSwapAddress(setSwapAddress__swapAddress).send({from:App.currentAddress})
          },
          transfer:async function (){
            let transfer_to = $('#transfer_to').val()
      let transfer_amount = $('#transfer_amount').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.transfer(transfer_to,transfer_amount).send({from:App.currentAddress})
          },
          transferFrom:async function (){
            let transferFrom_from = $('#transferFrom_from').val()
      let transferFrom_to = $('#transferFrom_to').val()
      let transferFrom_amount = $('#transferFrom_amount').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.transferFrom(transferFrom_from,transferFrom_to,transferFrom_amount).send({from:App.currentAddress})
          },
          transferOwnership:async function (){
            let transferOwnership_newOwner = $('#transferOwnership_newOwner').val()
      
            let dataRpoToken = await App.contracts.RpoToken.methods.transferOwnership(transferOwnership_newOwner).send({from:App.currentAddress})
          },
          
  };
  
  (function () {
     App.initWeb3();
  })();
  
  
