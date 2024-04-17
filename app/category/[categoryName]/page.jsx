export default function Page({ params }) {

    const data =[{
        id:"",
        name:"abc",
        img:"",
        category:"revive",

    },
    {
        id:"",
        name:"abc",
        category:"scorpius",

    }
];

    const filteredData = data.filter((item) => item.category === params.categoryName);
    return <div>Selected Category: {params.categoryName}
    {filteredData.map((item, index)=>(<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>))}
    </div>
  }
