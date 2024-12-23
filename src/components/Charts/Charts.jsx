import { Line, LineChart, XAxis, YAxis } from "recharts";


const Charts = () => {
const mathData =[
        { "id": 1, "student": "Student 1", "marks": 45 },
        { "id": 2, "student": "Student 2", "marks": 78 },
        { "id": 3, "student": "Student 3", "marks": 56 },
        { "id": 4, "student": "Student 4", "marks": 88 },
        { "id": 5, "student": "Student 5", "marks": 62 },
        { "id": 6, "student": "Student 6", "marks": 91 },
        { "id": 7, "student": "Student 7", "marks": 74 },
        { "id": 8, "student": "Student 8", "marks": 68 },
        { "id": 9, "student": "Student 9", "marks": 80 },
        { "id": 10, "student": "Student 10", "marks": 95 }
      ]
      
  return (
    <div>
      <LineChart  width={500} height={300} data={mathData}>
        <XAxis></XAxis>
        <YAxis></YAxis>
        <Line type={'linear'} dataKey={'marks'} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default Charts;