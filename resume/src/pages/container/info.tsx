import Academics from "../info/academics";
import Certificate from "../info/certificate";
import Project from "../info/project";
import Skill from "../info/skill";

export default function Info() {
    return (
        <div className="flex flex-col h-auto w-full text-black border-[1px] calibri mb-[10vh]">
            <table className="border-t-[1px] border-black">
                <tbody>
                    <tr>
                        <th className="text-2xl text-center w-full font-bold">Career Objective</th>
                    </tr>
                    <tr>
                        <td className="text-sm text-justify w-full font-semibold text-wrap px-2">To secure and excel at challenging job roles by engaging comprehensibly with all key stakeholders to efficiently disperse assigned responsibilities.</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th className="text-2xl text-center w-full font-bold">Academic Qualification</th>
                    </tr>
                </tbody>
            </table>
            
            <Academics />
            <Certificate />
            <Project />
            <Skill />
        </div>
    )
}