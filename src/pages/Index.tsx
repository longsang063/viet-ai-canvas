import { useState } from "react";
import { Search, Menu, Bell, User, Sparkles, TrendingUp, Star, Package, ChevronRight, Users, Brain, Zap, Shield, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import product images
import heroImage from "@/assets/hero-ai-dashboard.jpg";
import productEmail from "@/assets/product-email-marketing.jpg";
import productChatbot from "@/assets/product-chatbot.jpg";
import productContent from "@/assets/product-content-gen.jpg";
import productAnalytics from "@/assets/product-analytics.jpg";
import productLeadGen from "@/assets/product-lead-gen.jpg";
import productSocial from "@/assets/product-social-media.jpg";
import productFunnel from "@/assets/product-sales-funnel.jpg";
import productHR from "@/assets/product-hr-recruitment.jpg";
import workflowImg from "@/assets/workflow-automation.jpg";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const products = [
    {
      id: 1,
      name: "AI Email Marketing Automation",
      creator: "Marketing AI Pro",
      verified: true,
      rating: 4.9,
      reviews: 456,
      price: "$149/month",
      users: "2.3K",
      image: productEmail,
      badge: "🔥 HOT",
      category: "Marketing"
    },
    {
      id: 2,
      name: "Customer Support Chatbot",
      creator: "Support AI Team",
      verified: true,
      rating: 4.8,
      reviews: 892,
      price: "Free - $299",
      users: "5.6K",
      image: productChatbot,
      badge: "⚡ TRENDING",
      category: "Customer Service"
    },
    {
      id: 3,
      name: "Content Generation Engine",
      creator: "ContentAI VN",
      verified: true,
      rating: 4.7,
      reviews: 234,
      price: "$99/month",
      users: "1.8K",
      image: productContent,
      badge: "🆕 NEW",
      category: "Content Creation"
    },
    {
      id: 4,
      name: "Data Analytics Dashboard",
      creator: "Data Wizards",
      verified: true,
      rating: 5.0,
      reviews: 123,
      price: "Custom",
      users: "890",
      image: productAnalytics,
      badge: "💎 PREMIUM",
      category: "Analytics"
    },
    {
      id: 5,
      name: "Lead Generation AI",
      creator: "LeadGen Pro",
      verified: true,
      rating: 4.6,
      reviews: 567,
      price: "$199/month",
      users: "3.1K",
      image: productLeadGen,
      badge: "🔥 HOT",
      category: "Sales"
    },
    {
      id: 6,
      name: "Social Media Automation",
      creator: "Social AI Hub",
      verified: true,
      rating: 4.8,
      reviews: 789,
      price: "$129/month",
      users: "4.2K",
      image: productSocial,
      badge: "⚡ TRENDING",
      category: "Marketing"
    },
    {
      id: 7,
      name: "Sales Funnel Optimizer",
      creator: "Conversion Masters",
      verified: true,
      rating: 4.9,
      reviews: 345,
      price: "$249/month",
      users: "1.5K",
      image: productFunnel,
      badge: "💎 PREMIUM",
      category: "Sales"
    },
    {
      id: 8,
      name: "HR Recruitment AI",
      creator: "TalentAI Pro",
      verified: true,
      rating: 4.7,
      reviews: 456,
      price: "$179/month",
      users: "2.8K",
      image: productHR,
      badge: "🆕 NEW",
      category: "HR"
    }
  ];

  const stats = [
    { number: "1,200+", label: "Workflows", icon: Zap },
    { number: "5,000+", label: "Members", icon: Users },
    { number: "300+", label: "Projects", icon: Target },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Free",
      icon: "🚀",
      features: [
        "Access cộng đồng",
        "5 workflows/tháng",
        "Templates cơ bản",
        "Community support",
        "Basic integrations"
      ]
    },
    {
      name: "Pro",
      price: "$99",
      period: "/tháng",
      icon: "⚡",
      popular: true,
      features: [
        "Unlimited workflows",
        "Tư vấn AI chuyên sâu",
        "API access đầy đủ",
        "Priority support 24/7",
        "Advanced analytics",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      icon: "👑",
      features: [
        "Dedicated manager",
        "Custom integration",
        "White-label solution",
        "SLA guarantee",
        "Enterprise support",
        "Unlimited everything"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border h-[70px] flex items-center px-6">
        <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto">
          {/* Left: Logo & Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AINewbieVN
              </span>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm AI tools, workflows, giải pháp..."
                className="pl-12 h-12 bg-muted/50 border-border focus:border-primary transition-smooth"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Đăng Nhập
            </Button>
            <Button className="gradient-purple btn-glow">
              Dùng Thử Miễn Phí
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex pt-[70px]">
        {/* Left Sidebar */}
        <aside
          className={`fixed left-0 top-[70px] bottom-0 bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40 custom-scrollbar overflow-y-auto ${
            sidebarOpen ? "w-[250px]" : "w-0 -translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="p-4 space-y-6">
            {/* Quick Browse */}
            <div className="space-y-2">
              <Button variant="secondary" className="w-full justify-start gap-3 bg-primary text-primary-foreground hover:bg-primary/90">
                <Target className="h-5 w-5" />
                For You
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <TrendingUp className="h-5 w-5" />
                Trending Tools
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Star className="h-5 w-5" />
                Most Popular
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Sparkles className="h-5 w-5" />
                New Releases
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Package className="h-5 w-5" />
                Premium Solutions
              </Button>
            </div>

            <div className="border-t border-sidebar-border pt-4">
              <p className="text-xs font-semibold text-muted-foreground mb-3 px-3">DANH MỤC SẢN PHẨM</p>
              <div className="space-y-1">
                {[
                  "🤖 AI Chatbots & Agents",
                  "⚙️ Automation Workflows",
                  "📊 Data Analytics Tools",
                  "💬 Customer Support AI",
                  "📝 Content Generation",
                  "🎨 Creative AI Tools",
                  "🔗 API Integrations",
                  "📧 Marketing Automation",
                  "💼 Business Intelligence"
                ].map((item, idx) => (
                  <Button key={idx} variant="ghost" className="w-full justify-start text-sm">
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            <div className="border-t border-sidebar-border pt-4">
              <p className="text-xs font-semibold text-muted-foreground mb-3 px-3">CỘNG ĐỒNG</p>
              <div className="space-y-2">
                <div className="px-3 py-2 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-semibold">5,234 Online Now</span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  💡 Workflow Gallery
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  🎓 Learning Resources
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  💼 Job Board (23 new)
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-[250px]" : ""}`}>
          <div className="max-w-[1600px] mx-auto p-6 space-y-12">
            {/* Hero Banner */}
            <section className="relative h-[500px] rounded-xl overflow-hidden group">
              <img
                src={heroImage}
                alt="AI Dashboard Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  🔥 Trending This Week
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
                  AI Customer Support Agent
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Giảm 80% chi phí support • Phản hồi 24/7 • Tích hợp đa nền tảng
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    by AINewbieVN Team ✓
                  </span>
                  <span>👁️ 12.5K views</span>
                  <span>⭐ 4.9/5</span>
                  <span>💾 3.2K saves</span>
                </div>
                <Button size="lg" className="gradient-purple btn-glow">
                  Xem Demo Ngay
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </section>

            {/* Stats Bar */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} className="glass card-hover p-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </section>

            {/* Products Grid */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">AI Tools & Solutions Đang Hot 🔥</h2>
                  <p className="text-muted-foreground">Khám phá các giải pháp AI hàng đầu</p>
                </div>
                <Button variant="outline">
                  Phổ Biến
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden card-hover border-border group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur border-border">
                        {product.category}
                      </Badge>
                      <Badge className="absolute top-3 right-3 animate-pulse-glow">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {product.creator} {product.verified && "✓"}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1">
                          ⭐ {product.rating} ({product.reviews})
                        </span>
                        <span className="font-semibold text-primary">{product.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {product.users} users
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1 gradient-purple">
                          Try Now
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Workflow Gallery */}
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Workflow Templates - 1,200+ Mẫu Tự Động Hóa</h2>
                <p className="text-muted-foreground">Tiết kiệm 70% thời gian với workflow có sẵn</p>
              </div>

              <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-4">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <Card key={idx} className="flex-shrink-0 w-[280px] overflow-hidden card-hover group cursor-pointer">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={workflowImg}
                        alt={`Workflow ${idx}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-semibold">Marketing Workflow #{idx}</h4>
                      <div className="text-sm text-muted-foreground">by Automation Pro ✓</div>
                      <div className="flex gap-4 text-sm">
                        <span>❤️ 234</span>
                        <span>💾 89</span>
                      </div>
                      <Button size="sm" className="w-full" variant="outline">
                        Use Template
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="space-y-8 py-12">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Gói Dịch Vụ Phù Hợp Với Mọi Nhu Cầu</h2>
                <p className="text-muted-foreground">Chọn gói phù hợp để bắt đầu hành trình AI của bạn</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {pricingTiers.map((tier, idx) => (
                  <Card
                    key={idx}
                    className={`p-8 space-y-6 relative ${
                      tier.popular ? "border-primary card-hover animate-pulse-glow" : "border-border"
                    }`}
                  >
                    {tier.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-purple">
                        Phổ Biến Nhất
                      </Badge>
                    )}
                    <div className="text-center space-y-2">
                      <div className="text-4xl mb-2">{tier.icon}</div>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <div className="text-4xl font-bold">
                        {tier.price}
                        {tier.period && <span className="text-lg text-muted-foreground">{tier.period}</span>}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {tier.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full ${tier.popular ? "gradient-purple" : ""}`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            {/* Success Stories */}
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Câu Chuyện Thành Công</h2>
                <p className="text-muted-foreground">5,000+ doanh nghiệp đã tin dùng AINewbieVN</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    company: "E-commerce Pro",
                    quote: "AI chatbot giúp chúng tôi tiết kiệm 80% chi phí support",
                    metrics: ["📈 70% Efficiency", "💰 $50K Saved", "⏱️ 200 Hours/mo"]
                  },
                  {
                    company: "Marketing Agency",
                    quote: "Workflows tự động hóa giúp team tăng năng suất gấp 3 lần",
                    metrics: ["📈 300% Faster", "💰 $100K Revenue", "⏱️ 500 Hours/mo"]
                  },
                  {
                    company: "SaaS Startup",
                    quote: "Data analytics AI giúp ra quyết định nhanh và chính xác hơn",
                    metrics: ["📈 95% Accuracy", "💰 $75K Saved", "⏱️ 300 Hours/mo"]
                  }
                ].map((story, idx) => (
                  <Card key={idx} className="p-6 space-y-4 card-hover">
                    <div className="text-4xl mb-2">🏢</div>
                    <h4 className="font-bold text-lg">{story.company}</h4>
                    <p className="text-muted-foreground italic">"{story.quote}"</p>
                    <div className="space-y-2 pt-4 border-t border-border">
                      {story.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-sm font-semibold">{metric}</div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group">
                      Read Full Story
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="max-w-[1600px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">AINewbieVN</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Hệ Sinh Thái AI Toàn Diện #1 Việt Nam
              </p>
            </div>
            {[
              {
                title: "Products",
                links: ["AI Tools", "Workflows", "Templates", "Integrations"]
              },
              {
                title: "Community",
                links: ["Gallery", "Resources", "Job Board", "Support"]
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Compliance"]
              }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 AINewbieVN. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Facebook", "LinkedIn", "Twitter"].map((social) => (
                <Button key={social} variant="ghost" size="sm" className="hover:text-primary">
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
