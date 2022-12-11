import imgRent from "../assets/imgrent.png"
import { FaSearch, FaPlusCircle } from 'react-icons/fa';
import { TextField } from "@mui/material";
import FileBase64 from 'react-file-base64';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Pagination from "../pages/Pagination";
import House from "../components/House.jsx";

const theme = createTheme({
    palette: {
        primary: {
            main: "#BF1020"
        }
    }
})

const Rent = () => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [houses , setHouses] = useState([]);
    const [name , setName] = useState("");
    const [description , setDescription] = useState("");
    const [price , setPrice] = useState("");
    const [location , setLocation] = useState("");
    const [phone , setPhone] = useState("");
    const [picture , setPicture] = useState("");

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`http://localhost:5000/rent/getAllHouses?page=${page}`);
            const data = await response.json();

            setHouses(data.houses);
            setPages(data.numberOfPages)
        }
        fetchData();
    } , [page])

    async function submitHandler(e){
        e.preventDefault();

        const response = await fetch("http://localhost:5000/rent/insertHouse" , {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name,
                description,
                price,
                location,
                phone,
                picture
            })
        })
        const data = await response.json();

        if(data.msg == "house inserted successfully"){
            setHouses([...houses , {
                name,
                description,
                price,
                location,
                phone,
                picture
            }]);
        }


    }

    return (
        <section id="rent-page">
            <div className="header">

                <div className="container_img">
                    <img src={imgRent} alt="" />
                </div>

                <div className="container">
                    <h2>Discover Your New Home </h2>
                    <h4>We help tunisians rent houses </h4>
                    <div className="container-search">
                        <input
                            placeholder="Search for homes to rent " />
                        <button>
                            <FaSearch size={"20px"} />
                            <h6>search</h6>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-main">
                <div className="container-grid">
                    {
                        houses.map((item,index ,arr)=>{
                            return(
                                <House 
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    description={item.description}
                                    picture={item.picture}
                                />
                            )
                        })
                    }
                </div>
                <div className="container-form">
                    <form autoComplete="off" onSubmit={submitHandler} >
                        <ThemeProvider theme={theme}>
                            <TextField
                                label="Enter name"
                                value={name}
                                onChange={(e)=>{ setName(e.target.value) }}
                            />
                            <TextField
                                label="Enter description"
                                value={description}
                                onChange={(e)=>{setDescription(e.target.value)}}
                            />
                            <TextField
                                label="Enter price "
                                value={price}
                                onChange={(e)=>{ setPrice(e.target.value) }}
                            />
                            <TextField
                                label="Enter location"
                                value={location}
                                onChange={(e)=>{ setLocation(e.target.value) }}
                            />
                            <TextField
                                label="Enter phone number"
                                value={phone}
                                onChange={(e)=>{ setPhone(e.target.value) }}
                            />
                            <FileBase64
                                multiple={false}
                                onDone={({ base64 }) => setPicture(base64)}
                            />

                            <button>
                                <FaPlusCircle size={"18px"} />
                                <p>Post house for rent </p>
                            </button>

                        </ThemeProvider>

                    </form>
                </div>

            </div>
            <div className="pagination">
                <Pagination
                    page={page}
                    setPage={setPage}
                    pages={pages}
                />
            </div>

        </section>
    )
}

export default Rent