import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
 return (
   <Menu>
     <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       Sort by: Relevance
     </MenuButton>
     <MenuList>
       <MenuItem>1</MenuItem>
       <MenuItem>2</MenuItem>
       <MenuItem>3</MenuItem>
       <MenuItem>4</MenuItem>
       <MenuItem>5</MenuItem>
     </MenuList>
   </Menu>
 );
}

export default SortSelector