'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showQRCode, setShowQRCode] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [qrCodeError, setQRCodeError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'skills', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 导航栏 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              宋玉洁律师
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: '首页' },
                { id: 'about', label: '关于我' },
                { id: 'skills', label: '专业技能' },
                { id: 'achievements', label: '成就' },
                { id: 'contact', label: '联系方式' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 主页部分 */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto overflow-hidden shadow-2xl border-4 border-white">
              {!avatarError ? (
                <Image
                  src="/avatar.png"
                  alt="宋玉洁律师"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  onError={() => setAvatarError(true)}
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-5xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600">
                  宋
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            宋玉洁
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            保险法律专家 · 企业合规顾问
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            上海段和段（昆明）律师事务所律师 | AI与法律融合创新实践者
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              联系我
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-blue-600"
            >
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            关于我
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  {!avatarError ? (
                    <Image
                      src="/avatar.png"
                      alt="宋玉洁律师"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      onError={() => setAvatarError(true)}
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-8xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600">
                      宋
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-2xl font-bold text-blue-600 block mb-2">专注保险法律领域</span>
                  深耕保险法律领域，专注于保险法律咨询与保险法律纠纷处理，能精准把握保险行业法律痛点与客户需求。
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-xl font-semibold text-indigo-600 block mb-2">跨界背景 · 独特视角</span>
                  曾自主创业，积累了丰富的商业实践经验与问题解决思维，后因对法律职业的热爱与追求转行成为律师。
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-xl font-semibold text-purple-600 block mb-2">双重优势 · 卓越服务</span>
                  凭借跨领域经验为客户提供兼具法律专业性与商业实用性的服务方案。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 专业技能 */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            专业技能
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 法律专业能力 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                ⚖️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">法律专业能力</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                熟练掌握保险法相关法律法规、民法典、民事诉讼法等，可精准运用法律条文处理保险合同纠纷、理赔争议等各类保险法律事务。
              </p>
              <p className="text-gray-600 leading-relaxed">
                为客户提供从案件分析到诉讼代理的全流程法律支持。
              </p>
            </div>

            {/* 多元资质加持 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-indigo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                🎓
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">多元资质加持</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                持有企业合规师、税筹规划师、数据资产管理师、高级数据合规师等专业资质。
              </p>
              <p className="text-gray-600 leading-relaxed">
                能从合规管理、税务规划、数据安全等多维度为企业客户提供综合法律解决方案，助力企业规避经营中的法律风险。
              </p>
            </div>

            {/* AI技术融合能力 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                🤖
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI技术融合能力</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                具备AI智能体应用工程师资质，深入研究AI与法律行业的融合路径。
              </p>
              <p className="text-gray-600 leading-relaxed">
                专注智能体、AI编程在法律场景的落地应用，可利用技术手段优化法律工作流程，提升服务效率与质量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 成就展示 */}
      <section id="achievements" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            专业成就
          </h2>

          <div className="space-y-8">
            {/* 成就1 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl flex-shrink-0 shadow-lg">
                  📊
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">卓越案件业绩</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-4">
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                      <div className="text-gray-600">咨询客户</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-3xl font-bold text-indigo-600 mb-1">数千万</div>
                      <div className="text-gray-600">挽回损失</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-3xl font-bold text-purple-600 mb-1">85%+</div>
                      <div className="text-gray-600">胜诉率</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    成功代理多起复杂保险法律纠纷案件，涵盖人身保险理赔争议、财产保险合同纠纷等类型，凭借专业表现获得客户赠送的锦旗与书面感谢信，在行业内树立了良好口碑。
                  </p>
                </div>
              </div>
            </div>

            {/* 成就2 */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-500">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-4xl flex-shrink-0 shadow-lg">
                  🎤
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">专业培训讲师</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-3xl font-bold text-indigo-600 mb-1">20+</div>
                      <div className="text-gray-600">合作机构</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md">
                      <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                      <div className="text-gray-600">培训人次</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    受邀为云南省内20余家保险机构、中小企业开展保险法律及企业合规专题讲座，内容涵盖保险法律风险防范、企业数据合规管理等，帮助企业提升法律风险意识与应对能力，部分企业后续与律所建立长期法律顾问合作关系。
                  </p>
                </div>
              </div>
            </div>

            {/* 成就3 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-4xl flex-shrink-0 shadow-lg">
                  🚀
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">AI创新应用</h3>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md mb-4 inline-block">
                    <div className="text-3xl font-bold text-purple-600 mb-1">30%</div>
                    <div className="text-gray-600">效率提升</div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    在AI与法律融合领域，自行开发法律智能体应用原型，该原型可自动检索相似保险案例、生成基础法律文书初稿、梳理案件争议焦点，在日常处理保险法律咨询与案件材料整理工作中，将单案处理时间平均缩短30%，大大提高了工作效率，为后续规模化应用奠定基础。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            联系方式
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 mb-6">
                如需法律咨询或商务合作，欢迎通过以下方式联系我
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">联系电话</h3>
                <a href="tel:18502613028" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                  185 0261 3028
                </a>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">微信号</h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium">a_amanda_a</span>
                  <button
                    onClick={() => setShowQRCode(!showQRCode)}
                    className="text-blue-600 hover:text-blue-700 text-sm underline"
                  >
                    {showQRCode ? '隐藏' : '查看'}二维码
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">📢</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">微信公众号</h3>
                <a
                  href="https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=798081645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium underline"
                >
                  点击关注
                </a>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">执业机构</h3>
                <p className="text-gray-700">上海段和段（昆明）律师事务所</p>
              </div>
            </div>

            {/* 微信二维码弹窗 */}
            {showQRCode && (
              <div className="mt-8 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">微信二维码</h3>
                  <p className="text-gray-600 mb-6">扫描二维码添加微信：a_amanda_a</p>
                  <div className="flex justify-center mb-6">
                    <div className="w-64 h-64 bg-white rounded-2xl shadow-xl p-4 flex items-center justify-center border-2 border-gray-200">
                      {!qrCodeError ? (
                        <Image
                          src="/wechat-qr.png"
                          alt="微信二维码"
                          width={240}
                          height={240}
                          className="w-full h-full object-contain"
                          onError={() => setQRCodeError(true)}
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-center px-4">
                          <div>
                            <div className="text-6xl mb-4">📱</div>
                            <p className="text-sm">请将微信二维码图片保存为<br/><strong className="text-blue-600">wechat-qr.png</strong><br/>并放置到 public 文件夹</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    微信号：a_amanda_a
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 text-center pt-6 border-t border-gray-200">
              <div className="text-gray-600 mb-2">📍 执业地区</div>
              <p className="text-gray-700 font-medium mb-4">云南省昆明市</p>
              <p className="text-gray-600 text-lg font-medium">
                专业 · 高效 · 可信赖
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">© 2025 宋玉洁律师 版权所有</p>
          <p className="text-gray-500 text-sm">法律咨询 | 企业合规 | AI+法律创新</p>
        </div>
      </footer>
    </div>
  );
}
