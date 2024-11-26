"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Solutions() {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
			<Navigation />
			
			{/* Hero Section */}
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Receive Orders via WhatsApp.
					</h1>
					<p className="mt-4 text-zinc-400">
						Skip the middleman. Connect directly with your customers. Test our system for FREE.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				{/* Solutions Grid */}
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					{/* Restaurant Card */}
					<div className="group relative overflow-hidden bg-zinc-800 rounded-xl">
						<Image
							src="/restaurant.jpg"
							alt="Restaurant"
							width={720}
							height={480}
							className="h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
							<Link
								href="https://danasburgers.vercel.app/"
								className="px-8 py-4 bg-zinc-900 text-zinc-100 rounded-lg hover:bg-zinc-800 transition-colors"
							>
								I Have a Restaurant
							</Link>
						</div>
					</div>

					{/* Store Card */}
					<div className="group relative overflow-hidden bg-zinc-800 rounded-xl">
						<Image
							src="/store.jpg"
							alt="Store"
							width={720}
							height={480}
							className="h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
							<Link
								href="https://techimoon.vercel.app/"
								className="px-8 py-4 bg-zinc-900 text-zinc-100 rounded-lg hover:bg-zinc-800 transition-colors"
							>
								I Have a Store
							</Link>
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className="hidden w-full h-px md:block bg-zinc-800" />
				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					{features.map((feature, index) => (
						<div key={index} className="group relative bg-zinc-800 p-8 rounded-xl hover:bg-zinc-700 transition-colors">
							<div className="text-3xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-medium text-zinc-100 mb-2">{feature.title}</h3>
							<p className="text-zinc-400 text-sm">{feature.description}</p>
						</div>
					))}
				</div>

				{/* Testimonials Section */}
				<div className="hidden w-full h-px md:block bg-zinc-800" />
				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="group relative bg-zinc-800 p-8 rounded-xl hover:bg-zinc-700 transition-colors">
							<div className="flex flex-col items-center">
								<div className="w-20 h-20 relative mb-4">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										fill
										className="rounded-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-medium text-zinc-100 mb-2">{testimonial.name}</h3>
								<p className="text-zinc-400 text-sm text-center">{testimonial.quote}</p>
								<div className="text-zinc-500 mt-4">★★★★★</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="hidden w-full h-px md:block bg-zinc-800" />
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-4">
						Ready to start selling online?
					</h2>
					<p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
						Get your professional store with all the tools you need to grow your business
					</p>
					<Link
						href="https://www.upwork.com/services/product/development-it-a-fantastic-online-menu-to-receive-your-orders-directy-in-whatsapp-1663989489197293568?ref=project_share"
						className="px-8 py-4 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors inline-block"
					>
						Order Now
					</Link>
				</div>
			</div>

			{/* Footer Section */}
			<footer className="w-full border-t border-zinc-800 mt-16 pt-16 pb-8">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
						{/* Company Info */}
						<div>
							<h3 className="text-zinc-100 font-medium text-lg mb-4">Bedenker Labs</h3>
							<p className="text-zinc-400 text-sm">
								Helping businesses grow through technology and innovation.
							</p>
						</div>

						{/* Social Links - basado en contact/page.tsx */}
						<div>
							<h3 className="text-zinc-100 font-medium text-lg mb-4">Connect</h3>
							<div className="space-y-3">
								{socials.map((social) => (
									<Link
										key={social.label}
										href={social.href}
										target="_blank"
										className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
									>
										<span className="relative z-10 flex items-center justify-center w-8 h-8 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
											{social.icon}
										</span>
										<span className="text-sm">{social.handle}</span>
									</Link>
								))}
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-zinc-100 font-medium text-lg mb-4">Quick Links</h3>
							<div className="space-y-3">
								<Link href="/projects" className="block text-sm text-zinc-400 hover:text-zinc-100">
									Projects
								</Link>
								<Link href="/solutions" className="block text-sm text-zinc-400 hover:text-zinc-100">
									Solutions
								</Link>
								<Link href="/contact" className="block text-sm text-zinc-400 hover:text-zinc-100">
									Contact
								</Link>
							</div>
						</div>

						{/* Legal */}
						<div>
							<h3 className="text-zinc-100 font-medium text-lg mb-4">Legal</h3>
							<div className="space-y-3">
								<Link href="/privacy" className="block text-sm text-zinc-400 hover:text-zinc-100">
									Privacy Policy
								</Link>
								<Link href="/terms" className="block text-sm text-zinc-400 hover:text-zinc-100">
									Terms of Service
								</Link>
							</div>
						</div>
					</div>

					<div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400 text-sm">
						© {new Date().getFullYear()} Bedenker Labs. All rights reserved.
					</div>
				</div>
			</footer>
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
		name: "Maria",
		image: "/testimonials/maria.jpg",
		quote: "The best part is not having to pay commissions. The WhatsApp ordering system works perfectly."
	}
];

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/BedenkerLabs",
		label: "Twitter",
		handle: "@BedenkerLabs",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@bedenkerlabs.com",
		label: "Email",
		handle: "dev@bedenkerlabs.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Bedenker-Labs",
		label: "Github",
		handle: "Bedenker Labs",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://instagram.com/bedenkerlabs",
		label: "Instagram",
		handle: "@bedenkerlabs",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://linkedin.com/company/bedenkerlabs",
		label: "LinkedIn",
		handle: "Bedenker Labs",
	},
];