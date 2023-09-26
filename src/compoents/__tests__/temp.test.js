import {render, screen, cleanup} from "@testing-library/react"
import TempAndDetail from "../TempAndDetail";
import '@testing-library/jest-dom'

afterEach(()=>{
    cleanup();
})

test('should render temp details',()=>{
    const weather= {details:"peshawar", temp:30, temp_min:15, temp_max:30, speed:44, humidity:15, feels_like:35}
    render(<TempAndDetail weather={weather}/>);
    const tempElement= screen.getByTestId('temp-1');
    expect(tempElement).toBeInTheDocument();
    expect(tempElement).not.toContainHTML('<div>')
})

test('should not render temp details',()=>{
    const weather= {details, temp:30, temp_min:15, temp_max:30, speed:44, humidity:15, feels_like:35}
    render(<TempAndDetail weather={weather}/>);
    const tempElement= screen.getByTestId('temp-1');
    expect(tempElement).toBeInTheDocument();
})
