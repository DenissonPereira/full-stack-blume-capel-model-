import { useSpinContext } from "@/context";

export const Spin3 = () => {
    const { spin3 } = useSpinContext();

    return (
        <div className="w-full grid grid-cols-4 gap-4 pt-4 p-20 bg-background justify-center">
            {spin3.map((item) => (
                <div key={item.id} className="flex flex-col items-start">
                    <p>Temperatura: {item.temperatura}</p>
                    <p>m_A: {item.m_a}</p>
                    <p>m_B: {item.m_b}</p>
                    <p>m_staggered: {item.mag_staggered}</p>
                    <p>m_total: {item.mag_total}</p>
                </div>
            ))}
        </div>
    )
}
