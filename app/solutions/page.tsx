"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
	return (
		<div className="min-h-screen">
			<Navigation />
			
			{/* Hero Section */}
			<div className="relative h-[60vh] flex items-center justify-center">
				<Image
					src="/hero-background.jpg" 
					alt="Hero background"
					fill
					className="object-cover brightness-50"
				/>
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
						Recibí tus pedidos por WhatsApp
					</h1>
					<p className="text-xl md:text-2xl text-white">
						Y olvidate de los intermediarios
					</p>
				</div>
			</div>

			{/* Solutions Section */}
			<div className="container mx-auto py-20 px-4">
				<div className="grid md:grid-cols-2 gap-8">
					{/* Restaurante */}
					<div className="relative group overflow-hidden rounded-lg">
						<Image
							src="/restaurant.jpg" 
							alt="Restaurante"
							width={600}
							height={400}
							className="object-cover w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
							<Link
								href="/restaurant"
								className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
							>
								Tengo un restaurante
							</Link>
						</div>
					</div>

					{/* Tienda */}
					<div className="relative group overflow-hidden rounded-lg">
						<Image
							src="/store.jpg" 
							alt="Tienda"
							width={600}
							height={400}
							className="object-cover w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
							<Link
								href="/store"
								className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
							>
								Tengo una tienda
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="bg-gray-50 py-20 px-4">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16">
						Todo lo que necesitás para vender online
					</h2>
					
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Tienda Profesional */}
						<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-3xl mb-4">🏪</div>
							<h3 className="text-xl font-semibold mb-3">Tienda Profesional</h3>
							<p className="text-gray-600">Lista en 7 días, diseñada profesionalmente para tu negocio</p>
						</div>

						{/* Dominio */}
						<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-3xl mb-4">🌐</div>
							<h3 className="text-xl font-semibold mb-3">Dominio Gratis</h3>
							<p className="text-gray-600">Dominio personalizado incluido o conectá el tuyo propio</p>
						</div>

						{/* Mantenimiento */}
						<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-3xl mb-4">🔧</div>
							<h3 className="text-xl font-semibold mb-3">Mantenimiento Técnico</h3>
							<p className="text-gray-600">Nos encargamos de mantener tu sitio actualizado y funcionando</p>
						</div>

						{/* WhatsApp Integration */}
						<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-3xl mb-4">📱</div>
							<h3 className="text-xl font-semibold mb-3">Integración con WhatsApp</h3>
							<p className="text-gray-600">Sistema de reservas y carrito 24/7 directo a tu WhatsApp</p>
						</div>

						{/* Sin Comisiones */}
						<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-3xl mb-4">💰</div>
							<h3 className="text-xl font-semibold mb-3">0% de Comisión</h3>
							<p className="text-gray-600">No cobramos comisión por tus ventas online</p>
						</div>

						{/* Capacitación */}
						<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-3xl mb-4">🎯</div>
							<h3 className="text-xl font-semibold mb-3">Capacitación Gratuita</h3>
							<p className="text-gray-600">Llamada personal de capacitación y lanzamiento</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section con nuevo gradiente */}
			<div className="bg-gradient-to-r from-[#ffffff4d] to-[#2563eb] py-16 px-4">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
						¿Listo para empezar a vender online?
					</h2>
					<p className="text-xl text-white mb-8 max-w-2xl mx-auto">
						Obtené tu tienda profesional con todas las herramientas que necesitás para hacer crecer tu negocio
					</p>
					<Link
						href="/contact"
						className="inline-block px-8 py-4 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
					>
						Contactanos Ahora
					</Link>
				</div>
			</div>

			{/* Testimonials Section */}
			<div className="py-20 px-4 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16">
						Lo que dicen nuestros clientes
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{/* Testimonio 1 - Marcos */}
						<div className="bg-gray-50 p-6 rounded-xl shadow-lg">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 relative mb-4">
									<Image
										src="/testimonials/marcos.jpg"
										alt="Marcos"
										width={80}
										height={80}
										className="rounded-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-semibold mb-2">Marcos</h3>
								<p className="text-gray-600 text-center">
									"Desde que implementé la tienda online, mis ventas aumentaron un 40%. 
									La integración con WhatsApp hace todo más fácil y personal."
								</p>
								<div className="text-[#2563eb] mt-4">
									★★★★★
								</div>
							</div>
						</div>

						{/* Testimonio 2 - Mercedes */}
						<div className="bg-gray-50 p-6 rounded-xl shadow-lg">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 relative mb-4">
									<Image
										src="/testimonials/mercedes.jpg" 
										alt="Mercedes"
										width={80}
										height={80}
										className="rounded-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-semibold mb-2">Mercedes</h3>
								<p className="text-gray-600 text-center">
									"La capacitación gratuita fue excelente. En una semana ya estaba 
									manejando mi tienda como una profesional."
								</p>
								<div className="text-[#2563eb] mt-4">
									★★★★★
								</div>
							</div>
						</div>

						{/* Testimonio 3 - Maria */}
						<div className="bg-gray-50 p-6 rounded-xl shadow-lg">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 relative mb-4">
									<Image
										src="/testimonials/maria.jpg" 
										alt="Maria"
										width={80}
										height={80}
										className="rounded-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-semibold mb-2">José</h3>
								<p className="text-gray-600 text-center">
									"Lo mejor es no tener que pagar comisiones. El sistema de pedidos 
									por WhatsApp funciona perfectamente."
								</p>
								<div className="text-[#2563eb] mt-4">
									★★★★★
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
