import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="py-5 px-3">
      <h1 className="text-xl font-bold pb-4">Q-Zone</h1>
      <img src={qZone1} alt="" />
      <img className="mt-4" src={qZone2} alt="" />
      <img className="mt-4" src={qZone3} alt="" />
    </div>
  );
};

export default QZone;
