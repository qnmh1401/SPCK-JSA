const getData = async () => {
    const data = await fetch(
      "../FAKEAPI.json"
    )
      .then((data) => data.json())
      .then((data) => {
        console.log((data[0]).rated)
        for(let valueData of data){
            console.log(data)
        }
      })
      
    }

    const checkedId = localStorage.getItem("clickedId", JSON.parse(clickedId))
    console.log(checkedId)