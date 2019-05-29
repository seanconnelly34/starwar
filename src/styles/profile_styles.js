import styled from "styled-components";

const ProfileWrapper = styled.div`
  padding: 30px;
`;

const FaveWrapper = styled.div`
    margin: 6px 15px;
padding: 15px;
padding-top: 11px;
    padding-bottom: 0px;
background: white
border:.5px solid #eee;
border-radius:5px;
-webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
-moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
`;

const ProfileDescription = styled.div`
  padding: 40px;
  background: white
  border:.5px solid #eee;
  border-radius:5px;
  width:100%;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
-moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);

.fa-heart {
  font-size: 24px;
}
.liked {
  color: #cb0101 !important;
  font-size: 24px !important;
}

.fas{
  font-size: 28px;
    color: #e6e6e6;
    margin-right:10px;
}
.desc{
      margin-top: 30px;
}
p{
  margin-bottom:2rem;
}
`;

const ProfileFilms = styled.div`
  min-height: 249px;
  padding: 28px;
  background: #9656d5;
  border-left: 15px solid #8046b9;
  color: white;
  border-radius: 5px;
  width: 100%;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
`;
const ProfileVehicles = styled.div`
  height: 249px;
  padding: 28px;
  background: #f0aa2a;
  border-left: 15px solid #df9c21;
  color: white;
  border-radius: 5px;
  width: 100%;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
`;

const ProfileShips = styled.div`
  height: 249px;
  padding: 28px;
  background: #ff2f77;
  border-left: 15px solid #d1205e;
  color: white;
  border-radius: 5px;
  width: 100%;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
`;

export {
  ProfileWrapper,
  ProfileDescription,
  ProfileFilms,
  ProfileVehicles,
  ProfileShips,
  FaveWrapper
};
