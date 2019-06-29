var app=new Vue({
el:'#app',
data:{
    product:"Socks",
    description:"A pair of warm, fuzzy socks.",
    image:"./vmSocks-green-onWhite.jpg",
    altText:"A pair of Socks",
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    onSale:true,
    inStock:true,
    details:["80% Cotton","20% polyster","Gender-neutral"],
    sizes:["5","6","7"],
    variants:
    [
        {
            variantId:2234,
            variantColor:"green"
        },
        {
            variantId:2235,
            variantColor:"blue"
        }
    ]
}
})