import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Trophy } from "lucide-react";

export const HomePage = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "매치 스케줄링",
      description: "원하는 시간과 장소에서 축구 매치를 쉽게 예약하고 참여하세요.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "팀 관리",
      description: "팀원 모집부터 경기 결과 관리까지 체계적으로 관리하세요.",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "성과 추적",
      description: "개인 및 팀의 경기 기록과 성과를 한눈에 확인하세요.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            축구를 더 쉽게, 더 재미있게
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            MatchDay와 함께 완벽한 축구 경험을 만들어보세요. 
            매치 찾기부터 팀 관리까지 모든 것이 한 곳에서 가능합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/signup">지금 시작하기</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/matches">매치 찾기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            왜 MatchDay를 선택해야 할까요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            무료로 가입하고 첫 번째 매치를 예약해보세요
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/signup">무료 가입하기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};