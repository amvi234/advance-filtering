import "./Category.css";
import Input from '../../components/input';

function category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
      </div>
    </div>
  );
}

export default category;
