import imgWorks from "../assets/imgWorks.png"
import { FaSearch, FaPlusCircle } from 'react-icons/fa';
import { TextField } from "@mui/material";
import FileBase64 from 'react-file-base64';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
const Work = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#BF1020"
      }
    }
  })
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  return (
    <section className="works">
      <div className="img-work" >
        <img src={imgWorks} alt="" />
      </div>

      <header className="">
        <div className="search">
          <FaSearch size={"20px"} color="#777" />
          <input placeholder="search for jobs "
            type="text"
          />
        </div>
      </header>
      <div className="conatiner-main">
        <div className="container-grid">

          <div className="item">
            <div className="details">
              <h2>
                Senior Software Engineer ( Python Django )
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elit amet sapien vitae semper egestas maecenas molestie quam. Mattis ultricies
                facilisis eget ornare nec adipiscing. Quisque quis pellentesque orci eu elementum non.
              </p>
              <h3>Requirements :</h3>
              <div>
                <p>* Master Docker </p>
                <p>* Master Docker </p>
                <p>* Master Docker </p>
              </div>
              <h4>3500 DT - 5000 DT </h4>
              <h4>Phone number 52886446</h4>
              <button>postuler </button>

            </div>
          </div>
          <div className="item">
            <div className="details">
              <h2>
                Senior Software Engineer ( Python Django )
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elit amet sapien vitae semper egestas maecenas molestie quam. Mattis ultricies
                facilisis eget ornare nec adipiscing. Quisque quis pellentesque orci eu elementum non.
              </p>
              <h3>Requirements :</h3>
              <div>
                <p>* Master Docker </p>
                <p>* Master Docker </p>
                <p>* Master Docker </p>
              </div>
              <h4>3500 DT - 5000 DT </h4>
              <h4>Phone number 52886446</h4>
              <button>postuler </button>

            </div>
          </div>
          <div className="item">
            <div className="details">
              <h2>
                Senior Software Engineer ( Python Django )
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elit amet sapien vitae semper egestas maecenas molestie quam. Mattis ultricies
                facilisis eget ornare nec adipiscing. Quisque quis pellentesque orci eu elementum non.
              </p>
              <h3>Requirements :</h3>
              <div>
                <p>* Master Docker </p>
                <p>* Master Docker </p>
                <p>* Master Docker </p>
              </div>
              <h4>3500 DT - 5000 DT </h4>
              <h4>Phone number 52886446</h4>
              <button>postuler </button>

            </div>
          </div>

        </div>
        <div className="container-form">
          <form autoComplete="off" >
            <ThemeProvider theme={theme}>
              <TextField
                label="Enter name"
              />
              <TextField
                label="Enter description"
              />
              <TextField
                label="Enter price "
              />
              <TextField
                label="Enter location"
              />
              <TextField
                label="Enter phone number"
              />
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setImage(base64)}
              />

              <button>
                <FaPlusCircle size={"18px"} />
                <p>Post house for rent </p>
              </button>

            </ThemeProvider>

          </form>
        </div>
      </div>
    </section>
  )
}
export default Work