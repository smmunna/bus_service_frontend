import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (!auth) {
      navigate("https://iubat-bus-service.netlify.app/login");
    }
  }, [navigate]);

  const [area, setArea] = useState("");
  const [busno, setBusno] = useState("");
  const [stopage, setStopage] = useState("");
  const [pickTime, setPicktime] = useState("");

  const go = () => {
    if (area === "Chandura") {
      const busnum = "32";
      const stopage = "Chandura";
      const pickTime = "06:30 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Baripara") {
      const busnum = "32";
      const stopage = "Baripara";
      const pickTime = "06:32 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Kabirpur") {
      const busnum = "32";
      const stopage = "Kabirpur";
      const pickTime = "06:35 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Zerani Bazar") {
      const busnum = "32";
      const stopage = "Zerani Bazar";
      const pickTime = "06:38 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "EPZ") {
      const busnum = "32";
      const stopage = "EPZ";
      const pickTime = "06:38 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Baipel") {
      const busnum = "32";
      const stopage = "Baipel";
      const pickTime = "06:50 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Unique") {
      const busnum = "32";
      const stopage = "Unique";
      const pickTime = "06:50 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Zamgora Bazar") {
      const busnum = "32";
      const stopage = "Zamgora Bazar";
      const pickTime = "07:05 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Sarkar Market") {
      const busnum = "32";
      const stopage = "Sarkar Market";
      const pickTime = "07:08 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Norsinghpur") {
      const busnum = "32";
      const stopage = "Norsinghpur";
      const pickTime = "07:10 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Zirabo") {
      const busnum = "32";
      const stopage = "Zirabo";
      const pickTime = "07:15 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Ashulia") {
      const busnum = "32";
      const stopage = "Ashulia";
      const pickTime = "07:28 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    } else if (area === "Campus") {
      const busnum = "32";
      const stopage = "Campus";
      const pickTime = "08:10 AM";

      setArea(area);
      setBusno(busnum);
      setStopage(stopage);
      setPicktime(pickTime);
    }
  };

  return (
    <div>
      <div className="main">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-form">
              <p>See the Bus Schedule</p>
              <hr />
              <span className="from">From</span> <br />
              <select
                className="select-box"
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              >
                <option value="">Select your Place</option>
                <option value="Chandura">Chandura</option>
                <option value="Baripara">Baripara</option>
                <option value="Kabirpur">Kabirpur</option>
                <option value="Zerani Bazar">Zerani Bazar</option>
                <option value="EPZ">EPZ</option>
                <option value="Baipel">Baipel</option>
                <option value="Unique">Unique</option>
                <option value="Zamgora Bazar">Zamgora Bazar</option>
                <option value="Sarkar Market">Sarkar Market</option>
                <option value="Norsinghpur">Norsinghpur</option>
                <option value="Zirabo">Zirabo</option>
                <option value="Ashulia">Ashulia</option>
                <option value="Dhour">Dhour</option>
                <option value="Campus">Campus</option>
              </select>
              <br />
              <span className="from">To</span> <br />
              <select className="select-box" name="" id="">
                <option selected>IUBAT Gate</option>
              </select>
              <br />
              <button onClick={go}>Go</button>
              <br />
              <div className="details">
                <div className="row">
                  <table class="table table-dark">
                    <tr class="table-active">
                      <th>Stopage</th>
                      <th>Bus</th>
                      <th>Place</th>
                      <th>Pick Time</th>
                    </tr>
                    <tr class="table-active">
                      <td className="td-text">{stopage}</td>
                      <td className="td-text">{busno}</td>
                      <td className="td-text">{stopage}</td>
                      <td className="td-text">{pickTime}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
