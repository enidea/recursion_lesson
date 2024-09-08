function fireEmployees(employees: string[], unemployed: string[]): string[] {
  return employees.filter((employee) => !unemployed.includes(employee));
}
