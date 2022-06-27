import React, {useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import {convertTimestamp,CreateQrCode} from './Casting'
// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { CreateQrCode } from 'next-qrcode';
import Popup from 'reactjs-popup';
import ReactDOM from "react-dom";



PostFiltersForm.propTypes ={
onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm() {
    const [searchTerm ,setSearchTerm] = useState('');
    const [posts,setPosts]=useState([])


    const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  const Modal = ({ handleClose, details }) => {
    return (
      <div>
        
      </div>
    );
  };
  // change here

    useEffect(() => {
        const loadPosts = async () => {

          const response = await axios.get(
            'http://localhost:8686/api/v1/parking'
          );
          setPosts(response.data);

        };
  
        loadPosts();
      }, []);

    return(
      <div className="container">
      <div className="outline">
          <h2>Check Your Car</h2>
          <div class="form__group field">
<input type="input" class="form__field" placeholder="Search..." name="name" id='name' required onChange={(e) => setSearchTerm(e.target.value)} 
/>

</div>
      </div>
          {posts
        .filter((value) => {
          if (searchTerm === "") {
            return "";
          } else if (
            value.parkingCode.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        }).map((parking) =>
        <table className="table table-striped ">
        <thead> 
            
            <tr>
                <td>STT</td>
                <td>Mã đỗ xe</td>
                <td>Loại xe</td>
                <td>Loại vé</td>
                <td>Vị trí</td>
                <td>Thời gian vào</td>
                <td>Thời gian ra</td>
                <td>Tổng thời gian</td>
                <td>Tổng tiền</td>
                <td>Trạng thái</td>
                
            </tr>
        </thead>
        <tbody>
            {
                <tr key = {parking.id}>
                <td>{parking.id}</td>
                <td>{parking.parkingCode}</td>
                <td>{parking.vechile_cat_id ==3 ?<console>Xe 2 bánh</console> :null}
                {parking.vechile_cat_id ==4 ?<console>Xe oto</console> :null}
                {parking.vechile_cat_id ==5 ?<console>Xe oto điện</console> :null}
                </td>
                <td>{parking.rate_id ==7 ? <console>Xe điện có trạm sạc</console> :null}
                {parking.rate_id ==8 ? <console>Xe gắn máy</console> :null}
                {parking.rate_id ==9 ? <console>Xe ô tô ngoài trời</console> :null}
                {parking.rate_id ==10 ? <console>Xe gắn máy giờ cố định</console> :null}
                {parking.rate_id ==11 ? <console>Xe ô tô có mái che theo giờ</console> :null}

                </td>
                <td>{parking.slot_id ==1 ? <console>TW1</console> :null}
                {parking.slot_id ==3 ? <console>B1</console> :null}
                {parking.slot_id ==6 ? <console>TW2</console> :null}
                {parking.slot_id ==7 ? <console>B2</console> :null}
                {parking.slot_id ==8 ? <console>B3</console> :null}
                {parking.slot_id ==9 ? <console>B4</console> :null}
                {parking.slot_id ==10 ? <console>SS8</console> :null}
                {parking.slot_id ==11 ? <console>B12</console> :null}
                {parking.slot_id ==12 ? <console>A1 có trạm sạc</console> :null}
                </td>
                <td>
                {convertTimestamp(parking.in_time)}
                  </td>
                <td>
                {parking.out_time ?convertTimestamp(parking.out_time): null}
                
                 </td>
                <td>{parking.total_time}</td>
                <td>{parking.earned_amount}</td>
                <td>{parking.paid_status == 1 ? <console class="label label-success">Đã thanh toán</console> : <console class="label label-danger">Chưa thanh toán</console>}
                </td>
                
                   {/* <a href="#" onClick={() => CreateQr()}>
                  More details
                  </a> */}
              {/* <td> { CreateQrCode()} </td> */}
              {/* <button type="button" onclick="printThis()">Print</button> */}

            </tr>
             
        }
        </tbody>
    </table>)}
    {show && <Modal details={selectedData} handleClose={hideModal} />}
      </div>


    );
}
export default PostFiltersForm;