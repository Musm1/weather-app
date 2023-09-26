import {render, screen, cleanup} from "@testing-library/react"
import TimeLocation from "../TimeLocation";
import '@testing-library/jest-dom'

afterEach(()=>{
    cleanup();
})

test('should render time location',()=>{
    const weather= {dt:33.44, name:"pesawar", country:"pakistan"}
    render(<TimeLocation weather={weather}/>);
    const timeElement= screen.getByTestId('time-1');
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).not.toContainHTML('<div>')
})

test('should not render time location',()=>{
    const weather= {dt, name:"pesawar", country:"pakistan"}
    render(<TimeLocation weather={weather}/>);
    const timeElement= screen.getByTestId('time-1');
    expect(timeElement).toBeInTheDocument();
})
