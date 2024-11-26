"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
	return (
		<div className="min-h-screen bg-[#fafafa]">
			<Navigation />
			
			{/* Hero Section */}
			<div className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#000000] to-[#1a1a1a]">
				<div className="absolute inset-0 opacity-30">
					<div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
				</div>
				<div className="relative z-10 text-center px-4 max-w-4xl">
					<h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
						Receive Orders via WhatsApp
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 font-light">
						Skip the middleman. Connect directly with your customers.
					</p>
				</div>
			</div>

			{/* Solutions Section */}
			<div className="container mx-auto py-32 px-4">
				<div className="grid md:grid-cols-2 gap-12">
					{/* Restaurant */}
					<div className="group">
						<div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
							<Image
								src="/restaurant.jpg"
								alt="Restaurant"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/40 backdrop-blur-sm">
								<div className="h-full flex items-center justify-center">
									<Link
										href="/restaurant"
										className="px-12 py-5 bg-white/10 border border-white/20 text-white backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
									>
										I Have a Restaurant
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Store */}
					<div className="group">
						<div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
							<Image
								src="/store.jpg"
								alt="Store"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/40 backdrop-blur-sm">
								<div className="h-full flex items-center justify-center">
									<Link
										href="/store"
										className="px-12 py-5 bg-white/10 border border-white/20 text-white backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
									>
										I Have a Store
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-32 px-4 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl font-light text-center mb-24 tracking-tight">
						Everything you need to sell online
					</h2>
					
					<div className="grid md:grid-cols-3 gap-12">
						{features.map((feature, index) => (
							<div key={index} className="group p-8 rounded-2xl transition-all duration-300 hover:bg-gray-50">
								<div className="text-3xl mb-6">{feature.icon}</div>
								<h3 className="text-xl font-medium mb-4">{feature.title}</h3>
								<p className="text-gray-600 leading-relaxed">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="relative py-32 px-4 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#1a1a1a]" />
				<div className="container mx-auto relative z-10 text-center">
					<h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
						Ready to start selling online?
					</h2>
					<p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
						Get your professional store with all the tools you need to grow your business
					</p>
					<Link
						href="/contact"
						className="inline-block px-12 py-5 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300"
					>
						Contact Us Now
					</Link>
				</div>
			</div>

			{/* Testimonials */}
			<div className="py-32 px-4 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl font-light text-center mb-24 tracking-tight">
						What our clients say
					</h2>
					<div className="grid md:grid-cols-3 gap-12">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="p-8 rounded-2xl bg-gray-50">
								<div className="flex flex-col items-center">
									<div className="w-20 h-20 relative mb-6">
										<Image
											src={testimonial.image}
											alt={testimonial.name}
											fill
											className="rounded-full object-cover"
										/>
									</div>
									<h3 className="text-xl font-medium mb-4">{testimonial.name}</h3>
									<p className="text-gray-600 text-center leading-relaxed">
										{testimonial.quote}
									</p>
									<div className="text-gray-400 mt-6">★★★★★</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const features = [
	{
		icon: "🏪",
		title: "Professional Store",
		description: "Ready in 7 days, professionally designed for your business"
	},
	{
		icon: "🌐",
		title: "Free Domain",
		description: "Custom domain included or connect your own"
	},
	{
		icon: "🔧",
		title: "Technical Maintenance",
		description: "We keep your site up-to-date and running smoothly"
	},
	{
		icon: "📱",
		title: "WhatsApp Integration",
		description: "24/7 booking and cart system direct to your WhatsApp"
	},
	{
		icon: "💰",
		title: "0% Commission",
		description: "We don't charge commission on your online sales"
	},
	{
		icon: "🎯",
		title: "Free Training",
		description: "Personal training and launch call included"
	}
];

const testimonials = [
	{
		name: "Mark",
		image: "/testimonials/marcos.jpg",
		quote: "Since implementing the online store, my sales increased by 40%. The WhatsApp integration makes everything easier and more personal."
	},
	{
		name: "Mercedes",
		image: "/testimonials/mercedes.jpg",
		quote: "The free training was excellent. Within a week I was managing my store like a professional."
	},
	{
		name: "Joseph",
		image: "/testimonials/jose.jpg",
		quote: "The best part is not having to pay commissions. The WhatsApp ordering system works perfectly."
	}
];
