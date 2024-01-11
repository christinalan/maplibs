export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <section>
        {/* shared layout for about/instructions split */}
        <nav></nav>
        {children}
    </section>
    )
  }