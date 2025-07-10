"use client"

import { useState, useEffect, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Mail,
  Phone,
  MapPin,
  Download,
  GraduationCap,
  Award,
  TrendingUp,
  BarChart3,
  Users,
  Target,
  Briefcase,
  BookOpen,
  Star,
  Send,
  CheckCircle,
  Calendar,
  Building,
  Languages,
  Linkedin,
  FileText,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { submitContactForm } from "./actions"

export default function EconomicsPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  // Handle form submission
  const handleFormSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        await submitContactForm(formData)
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 5000)
      } catch (error) {
        console.error("Form submission error:", error)
        alert("Failed to send message. Please try again or contact directly via email.")
      }
    })
  }

  // Download CV function
  const downloadCV = () => {
    try {
      // Create a temporary link element
      const link = document.createElement("a")
      link.href = "/cv.jpg" // Path to your CV file in the public folder
      link.download = "Emnet_Assefa_CV.jpg" // Name for the downloaded file
      link.target = "_blank"

      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback: open in new tab
      window.open("/cv.jpg", "_blank")
    }
  }

  // Animated counters
  const [counters, setCounters] = useState({
    gpa: 0,
    experience: 0,
    projects: 0,
    skills: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters((prev) => ({
        gpa: prev.gpa < 3.52 ? Math.min(prev.gpa + 0.1, 3.52) : 3.52,
        experience: prev.experience < 6 ? prev.experience + 1 : 6,
        projects: prev.projects < 12 ? prev.projects + 1 : 12,
        skills: prev.skills < 8 ? prev.skills + 1 : 8,
      }))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const skills = [
    { name: "Economic Analysis", level: 95 },
    { name: "Market Research", level: 90 },
    { name: "Data Analysis", level: 85 },
    { name: "Financial Modeling", level: 80 },
    { name: "Business Strategy", level: 88 },
    { name: "Project Management", level: 85 },
    { name: "Public Relations", level: 82 },
    { name: "Critical Thinking", level: 92 },
  ]

  const experiences = [
    {
      company: "Medeladil Trading PLC",
      position: "Sales Consultant/Trainer",
      period: "November 2025 - March 2025",
      location: "Addis Ababa, Ethiopia",
      achievements: [
        "Trained and guided sales teams on product knowledge and customer engagement strategies",
        "Developed and implemented effective sales plans to boost revenue and market penetration",
        "Built strong client relationships, addressing inquiries and resolving issues for customer satisfaction",
        "Conducted market research to identify trends and opportunities for business growth",
        "Achieved and exceeded monthly sales targets through strategic negotiations and persuasive selling",
      ],
    },
  ]

  const projects = [
    {
      title: "Ethiopian Economic Growth Analysis",
      description:
        "Comprehensive analysis of Ethiopia's economic growth patterns, inflation trends, and employment statistics over the past decade.",
      category: "Economic Research",
      tools: ["Excel", "SPSS", "Economic Modeling"],
      impact: "Identified key growth drivers and policy recommendations",
    },
    {
      title: "Market Penetration Strategy for SMEs",
      description:
        "Developed market entry strategies for small and medium enterprises in the Ethiopian market, focusing on competitive analysis and consumer behavior.",
      category: "Business Strategy",
      tools: ["Market Research", "SWOT Analysis", "Financial Modeling"],
      impact: "Helped 5 SMEs increase market share by 25%",
    },
    {
      title: "Consumer Price Index Study",
      description:
        "Analyzed consumer price trends and inflation patterns in major Ethiopian cities, providing insights for policy makers.",
      category: "Economic Analysis",
      tools: ["Statistical Analysis", "Data Visualization", "Economic Theory"],
      impact: "Published findings used by local government",
    },
    {
      title: "Sales Performance Optimization",
      description:
        "Implemented data-driven sales strategies that improved team performance and customer acquisition rates.",
      category: "Sales Analytics",
      tools: ["CRM Systems", "Performance Metrics", "Training Programs"],
      impact: "Increased sales efficiency by 40%",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">EA</span>
              </div>
              <h1 className="text-2xl font-bold text-gradient">Emnet Assefa</h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors font-medium ${
                    activeSection === section ? "text-gray-800" : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-gray-800/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInUp">
              <div className="mb-6">
                <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-200">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Recent Graduate
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  <span className="text-gradient">Economics</span>
                  <br />
                  <span className="text-gray-800">Graduate</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Recent B.A. graduate in Economics from Wolkite University, equipped with strong analytical,
                  problem-solving, and research skills. Passionate about applying economic theories to real-world
                  challenges and driving organizational growth through data-driven decision-making.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:opacity-90 transform hover:scale-105 transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 transform hover:scale-105 transition-all bg-transparent"
                  onClick={downloadCV}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700">{counters.gpa.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">GPA / 4.0</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700">{counters.experience}+</div>
                  <div className="text-sm text-gray-600">Months Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700">{counters.projects}+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700">{counters.skills}+</div>
                  <div className="text-sm text-gray-600">Core Skills</div>
                </div>
              </div>
            </div>

            <div className="animate-fadeIn">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <Avatar className="w-48 h-48 mx-auto mb-6 ring-4 ring-gray-100">
                    <AvatarImage src="/images/emnet-profile.png" alt="Emnet Assefa" />
                    <AvatarFallback className="text-4xl gradient-primary text-white">EA</AvatarFallback>
                  </Avatar>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Emnet Assefa</h3>
                    <p className="text-gray-600 font-medium mb-4">Economics Graduate & Business Analyst</p>

                    <div className="flex justify-center space-x-4 mb-6">
                      <Link
                        href="mailto:emninat@gmail.com"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </Link>
                      <Link href="tel:+251922679412" className="text-gray-600 hover:text-gray-800 transition-colors">
                        <Phone className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex items-center justify-center mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        Addis Ababa, Ethiopia
                      </div>
                      <div className="flex items-center justify-center">
                        <Languages className="w-4 h-4 mr-2" />
                        English (Good) • Amharic (Fluent)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated economics graduate with a passion for analyzing market trends, developing business strategies,
              and driving organizational growth through data-driven insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <GraduationCap className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-bold text-lg mb-2">Bachelor of Arts in Economics</h3>
                <p className="text-gray-600 font-medium mb-2">Wolkite University</p>
                <p className="text-gray-600 mb-2">2021 - 2024</p>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  GPA: 3.52/4.0
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-gray-600 mr-2" />
                    <span className="text-sm">Economic Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-4 h-4 text-gray-600 mr-2" />
                    <span className="text-sm">Market Research</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-600 mr-2" />
                    <span className="text-sm">Sales Strategy</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 text-gray-600 mr-2" />
                    <span className="text-sm">Business Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm">Dean's List Recognition</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm">Exceeded Sales Targets</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 text-gray-600 mr-2" />
                    <span className="text-sm">Research Publications</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-purple-600 mr-2" />
                    <span className="text-sm">Team Leadership</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">
              Professional experience in sales, training, and business development
            </p>
          </div>

          {experiences.map((exp, index) => (
            <Card key={index} className="mb-8 hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-700">{exp.position}</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-800 mt-1">{exp.company}</CardDescription>
                    <div className="flex items-center mt-2 text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{exp.period}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Building className="w-12 h-12 text-gray-600" />
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Skills</h2>
            <p className="text-xl text-gray-600">
              Professional competencies developed through education and practical experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-gray-600 mr-3" />
                    Economic Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Expertise in analyzing economic trends, market conditions, and financial data to provide actionable
                    insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["GDP Analysis", "Inflation Tracking", "Market Trends", "Policy Impact"].map((item) => (
                      <Badge key={item} variant="secondary" className="bg-gray-100 text-gray-800">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 text-gray-600 mr-3" />
                    Business Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Proven ability to develop and implement strategies that drive business growth and market expansion.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Sales Strategy", "Market Research", "Client Relations", "Team Training"].map((item) => (
                      <Badge key={item} variant="secondary" className="bg-green-100 text-green-800">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-6 h-6 text-gray-600 mr-3" />
                    Data Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Strong analytical skills with experience in statistical analysis and data interpretation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Excel", "SPSS", "Statistical Analysis", "Data Visualization"].map((item) => (
                      <Badge key={item} variant="secondary" className="bg-purple-100 text-purple-800">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects & Research</h2>
            <p className="text-xl text-gray-600">
              Academic and professional projects demonstrating analytical and problem-solving capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-700 mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="border-gray-300 text-gray-700">
                        {project.category}
                      </Badge>
                    </div>
                    <FileText className="w-8 h-8 text-gray-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Tools & Methods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="bg-gray-100 text-gray-700">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center">
                      <Activity className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-700">Impact: {project.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 gradient-secondary text-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {
                "I'm always open to discussing new opportunities, collaborations, or just having a conversation about economics and business. Let's connect!"
              }
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold mb-6">Let&apos;s Connect</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <Link
                      href="mailto:emninat@gmail.com"
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      emninat@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Phone</p>
                    <Link href="tel:+251922679412" className="text-gray-500 hover:text-gray-800 transition-colors">
                      +251922679412
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Location</p>
                    <p className="text-gray-500">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-semibold mb-4 text-lg">Professional Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Economic Research",
                    "Market Analysis",
                    "Business Strategy",
                    "Data Analytics",
                    "Policy Analysis",
                    "Financial Modeling",
                  ].map((interest) => (
                    <Badge key={interest} variant="secondary" className="bg-white/20 text-black border-white/30">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  {"I'd love to hear from you. Send me a message and I'll respond as soon as possible."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      {"Thank you for reaching out. I'll get back to you within 24 hours!"}
                    </p>
                  </div>
                ) : (
                  <form action={handleFormSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input type="text" name="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input type="text" name="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" name="email" placeholder="john@example.com" required />
                    </div>

                    <div className="mb-4">
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input type="text" name="subject" placeholder="Business Opportunity" required />
                    </div>

                    <div className="mb-6">
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        rows={4}
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full gradient-primary text-white hover:opacity-90 transform hover:scale-105 transition-all"
                    >
                      {isPending ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EA</span>
                </div>
                <h3 className="text-2xl font-bold">Emnet Assefa</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Economics Graduate & Business Analyst passionate about applying economic theories to real-world
                challenges.
              </p>
              <div className="flex space-x-4">
                <Link href="mailto:emninat@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
                <Link href="tel:+251922679412" className="text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Experience", "Skills", "Projects", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Expertise</h4>
              <div className="space-y-2 text-gray-400">
                <div>Economic Analysis</div>
                <div>Market Research</div>
                <div>Business Strategy</div>
                <div>Sales Training</div>
                <div>Data Analysis</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Emnet Assefa. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">Built with passion for economics and business excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
