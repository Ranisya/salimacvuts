function SkillRow(props: any) {
    return (
        <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-4 my-5 text-white">
            <div className="flex justify-between items-center">
                <span className="text-lg">{props.skill}</span>
                <span className="text-sm">{props.level}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-3 mt-2">
                <div
                    className="bg-indigo-500 h-3 rounded-full"
                    style={{ width: `${props.level}%` }}
                ></div>
            </div>
        </div>
    );
}

export default function SkillList() {
    return (
        <div className="container mx-auto p-2 text-center pt-20"> 
        <h2 className="text-2x1">Skills</h2>  
            
            <SkillRow skill="Microsoft Office" level={75} />
            <SkillRow skill="Lightroom" level={75} />
            <SkillRow skill="Google Worksheet" level={55} />
            <SkillRow skill="Bahasa Inggris" level={70} />
        </div>
    );
}
