export default function Page({ params }: { params: { patient_id: string } }) {
    return <div>My Post: {params.patient_id}</div>;
}
