function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
  (updatedEmployee[key] = value);
  return updatedEmployee;
  }
  const employee = {
    name: '', 
    key: '',
    value: ''
  };
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, key, value);
  console.log(updatedEmployee);
 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

   const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value);
  console.log(destructivelyUpdatedEmployee);

  function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
