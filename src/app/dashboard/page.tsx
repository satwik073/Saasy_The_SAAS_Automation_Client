import { Sidebar } from "@/animations/Sidebar";

export default function Dashboard(){
    return (
        <main>
             <Sidebar open={true} animate={true} >
             <div>Dashboard Sidebar Content</div>
             </Sidebar>
        </main>
    )
}
