

const  HomeSectionTwo = async () => {
    const data = await fetch('http://localhost:3000/friends.json')
    
    const friends = await data.json()
    console.log('friends', friends)
    
    const totalFriends = friends.length
    console.log(totalFriends)
    let countOnTrack = 0;
    let countNeedAttention = 0;
    let countInteraction = 0;
    
    friends.filter(f => {
        
        if(f.status === 'on-track'){
        countOnTrack++;}
        else if(f.status === 'overdue'){ countNeedAttention++}
        else if( f.days_since_contact< 30){countInteraction++}
    
    })
    console.log(countOnTrack, countNeedAttention, countInteraction,'tttttttttttttttt')
   
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 container mx-auto items-center justify-center">
              <div>
            <div className="card bg-base-100 w-50 shadow-sm text-center ml-0 md:ml-10">
              <div className="card-body">
                <h2 className="text-3xl font-bold text-center">{totalFriends}</h2>
                <p>Total friends</p>
                
              </div>
</div>
        </div>
          <div>
            <div className="card bg-base-100 w-50 shadow-sm text-center">
  <div className="card-body">
    <h2 className="text-3xl font-bold text-center">{countOnTrack}</h2>
    <p>On track</p>
    
  </div>
</div>
        </div>
          <div>
            <div className="card bg-base-100 w-50 shadow-sm text-center">
  <div className="card-body">
    <h2 className="text-3xl font-bold text-center">{countNeedAttention}</h2>
    <p>Need Attention</p>
    
  </div>
</div>
        </div>
          <div>
            <div className="card bg-base-100 w-50 shadow-sm text-center">
  <div className="card-body">
    <h2 className="text-3xl font-bold text-center">{countInteraction}</h2>
    <p>Contacted within Month</p>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default  HomeSectionTwo;