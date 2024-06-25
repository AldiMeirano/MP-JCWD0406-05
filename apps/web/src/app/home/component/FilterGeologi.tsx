import { Dropdown } from 'flowbite-react';

const FilterGeologi = () => {
  return (
    <div className="mx-auto max-w-screen-lg justify-center mt-10 border-red-500">
      <div className="flex justify-between">
        <h1>Hello pantek</h1>
        <Dropdown label="Dropdown button">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default FilterGeologi;
