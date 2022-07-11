import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Constants from '../constants';

function DropdownMenu() {
    const handleSelect=(e)=>{
        console.log(e);
    }
  return (
    <DropdownButton id="dropdown-basic-button"
    title="Dropdown button" onSelect={handleSelect}>
        {Constants.traditions.map((key) => {
            return (
                <Dropdown.Item key={key.id} eventKey={key.id}>{key.id}</Dropdown.Item>
            )
        })}
    </DropdownButton>
  );
}

export default DropdownMenu;
