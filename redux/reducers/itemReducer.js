const initialState = {
    items: [
      {
        name:'avocado',
        img:'/avocado.webp',
        sale:'',
        oldPrice:'',
        price:'67',
      },
      {
        name:'banan',
        img:'/tort.webp',
        sale:'12',
        oldPrice:'34',
        price:'24',
      },
      {
        name:'pine apple',
        img:'/info_2.jpg',
        sale:'3',
        oldPrice:'46',
        price:'32',
      },
      {
        name:'grape fruit',
        img:'/tort.webp',
        sale:'',
        oldPrice:'',
        price:'74',
      },
      {
        name:'tort',
        img:'/info_2.jpg',
        sale:'',
        oldPrice:'',
        price:'54',
      },
      {
        name:'water',
        img:'/tort.webp',
        sale:'16',
        oldPrice:'67',
        price:'45',
      },
      {
        name:'juice',
        img:'/info_2.jpg',
        sale:'56',
        oldPrice:'78',
        price:'35',
      },
      {
        name:'lemon',
        img:'/avocado.webp',
        sale:'',
        oldPrice:'',
        price:'312',
      },
      {
        name:'grape',
        img:'/info_2.jpg',
        sale:'80',
        oldPrice:'123',
        price:'21',
      },
    ]
  }
  
    const itemReducer = (state = initialState, action) => {
  
      return state
  }
  
  export default itemReducer