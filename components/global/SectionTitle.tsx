const SectionTitle = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground">
                {desc}
            </p>
        </div>
    )
}

export default SectionTitle