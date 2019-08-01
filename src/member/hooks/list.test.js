import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './list';
import { exportAllDeclaration } from '@babel/types';

describe('<List/>', () => {
    it('should render list', () => {
        // shallow()-> to get shallow  instance of component not the deep instance exmaple any nesting comp
        const wrapper = shallow(<List></List>);
        exportAllDeclaration(wrapper.find().toHaveLength('greater than 2'));
    });
});