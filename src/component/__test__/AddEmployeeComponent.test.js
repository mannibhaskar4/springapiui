import { render, screen } from '@testing-library/react';
import AddEmployeeComponent from '../AddEmployeeComponent';
import HeaderComponent from '../HeaderComponent';





describe("Add Employee Component ",async () =>{
    it('checks all feilds are there or not on screen', async () => {
        
        render(
            <AddEmployeeComponent />
        );
        const inputElement=screen.getByPlaceholderText(/Enter Name/i)
        expect(inputElement).toBeInTheDocument();
      });
}) 