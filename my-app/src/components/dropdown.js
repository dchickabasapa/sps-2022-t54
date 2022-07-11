import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Constants from '../constants';

function DropdownMenu() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {Constants.traditions.map((key) => {
            return (
                <Dropdown.Item>{key.id}</Dropdown.Item>
            )
        })}
    </DropdownButton>
  );
}

export default DropdownMenu;
